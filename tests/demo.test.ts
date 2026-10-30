import {describe,it,expect} from 'vitest';
import {commandItems,moveCommand,parseSlide,reviewMoments,searchCommands,slideSamples} from '../src/demo-model';
import {projects} from '../src/content';

describe('command interaction model',()=>{
 it('supports English aliases, case, whitespace and Chinese',()=>{
  for(const query of [' SHARE ','sharing','分享','权限'])expect(searchCommands(query).map(item=>item.id)).toEqual(['sharing']);
 });
 it('requires all tokens and exposes a useful empty state',()=>{
  expect(searchCommands('keyboard keys')[0].id).toBe('shortcuts');
  expect(searchCommands('share keyboard')).toEqual([]);
  expect(searchCommands('不存在')).toEqual([]);
  expect(searchCommands('')).toEqual(commandItems);
 });
 it('keeps permission-denied commands visible without making them executable',()=>{
  const items=searchCommands('delete');expect(items).toHaveLength(1);expect(items[0].disabled).toBe(true);
  expect(moveCommand(items,-1,1)).toBe(-1);
 });
 it('wraps keyboard navigation while skipping disabled commands',()=>{
  expect(moveCommand(commandItems,0,1)).toBe(1);
  expect(moveCommand(commandItems,2,1)).toBe(0);
  expect(moveCommand(commandItems,0,-1)).toBe(2);
  expect(moveCommand([],0,1)).toBe(-1);
 });
});
describe('restricted slide grammar',()=>{
 it('parses both language samples with matching structure',()=>{
  for(const sample of Object.values(slideSamples)){const slide=parseSlide(sample);expect(slide.title).not.toBe('Untitled');expect(slide.points).toHaveLength(3);expect(slide.body).toBeTruthy()}
 });
 it('handles CRLF, blank inputs and missing titles',()=>{
  expect(parseSlide('# Heading\r\nBody\r\n- Item')).toEqual({title:'Heading',body:'Body',points:['Item']});
  expect(parseSlide('', '未命名')).toEqual({title:'未命名',body:'',points:[]});
  expect(parseSlide('Body only').title).toBe('Untitled');
 });
 it('returns HTML as literal text rather than executing it',()=>{
  expect(parseSlide('<script>alert(1)</script>').body).toBe('<script>alert(1)</script>');
  expect(parseSlide('# <img onerror=alert(1)>').title).toBe('<img onerror=alert(1)>');
 });
});
describe('research and demo integrity',()=>{
 it('every case names and links a real external reference in both languages',()=>{
  for(const cases of Object.values(projects))for(const item of cases){expect(item.reference.url).toMatch(/^https:\/\//);expect(item.reference.note.length).toBeGreaterThan(20);expect(item.demoHint).toBeTruthy();expect(item.context).toBeTruthy()}
  expect(projects.cn.map(item=>item.reference.url)).toEqual(projects.en.map(item=>item.reference.url));
 });
 it('review frames have unique timestamps and bilingual feedback',()=>{
  expect(new Set(reviewMoments.map(item=>item.time)).size).toBe(3);
  for(const item of reviewMoments){expect(item.note.cn).toBeTruthy();expect(item.note.en).toBeTruthy()}
 });
});
