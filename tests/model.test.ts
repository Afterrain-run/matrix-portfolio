import {describe,it,expect} from 'vitest';
import {copy,projects,type Locale,type Category} from '../src/content';
import {buildResume,filterProjects,surfacePoint} from '../src/model';
describe('localized portfolio data',()=>{
 for(const locale of ['cn','en'] as Locale[]){
  it(locale+' has four distinct, complete cases',()=>{
   expect(new Set(projects[locale].map(p=>p.id)).size).toBe(4);
   for(const project of projects[locale]){expect(project.architecture).toHaveLength(4);for(const value of Object.values(project))expect(value).toBeTruthy()}
  });
  for(const category of ['all','product','system','experiment'] as Category[])it(locale+' filters '+category,()=>{
   const selected=filterProjects(projects[locale],category);
   expect(selected).toHaveLength(category==='all'?4:category==='experiment'?2:1);
   if(category!=='all')expect(selected.every(p=>p.category===category)).toBe(true);
  });
  it(locale+' downloads a complete resume with real practice details',()=>{
   const text=buildResume(locale);expect(text).toContain(copy[locale].statusNote);expect(text).toContain(copy[locale].contact);
   projects[locale].forEach(p=>expect(text).toContain(p.name));
   copy[locale].history.forEach(h=>expect(text).toContain(h.company));
   expect(text).toContain(copy[locale].educationText);
  });
 }
 it('locales have identical project IDs and structure',()=>{expect(projects.cn.map(p=>p.id)).toEqual(projects.en.map(p=>p.id));expect(Object.keys(copy.cn)).toEqual(Object.keys(copy.en))});
 it('does not publish placeholder contact details or fictional claims',()=>{const text=JSON.stringify(copy)+JSON.stringify(projects);expect(text).not.toContain('example.com');expect(text).not.toContain('虚构');expect(text).not.toContain('Fictional')});
});
describe('sculpture geometry',()=>{
 it('surface wraps continuously',()=>{for(const form of [0,1]){const first=surfacePoint(0,0,form),last=surfacePoint(Math.PI*2,Math.PI*2,form);first.forEach((v,i)=>expect(v).toBeCloseTo(last[i],8))}});
 it('both forms produce finite bounded geometry',()=>{for(const form of [0,1])for(let u=0;u<6.3;u+=.1)for(let v=0;v<6.3;v+=.3)for(const value of surfacePoint(u,v,form)){expect(Number.isFinite(value)).toBe(true);expect(Math.abs(value)).toBeLessThan(1.7)}});
 it('switching form changes the geometry',()=>{expect(surfacePoint(.7,.4,0)).not.toEqual(surfacePoint(.7,.4,1))});
});
