import {describe, expect, it} from 'vitest';
import {defaults, parseConfig, posterReducer, presets, serializeConfig, type PosterState} from '../src/poster-model';

describe('portable poster configuration', () => {
  it('round-trips every preset including multiline text and seed', () => {
    for (const preset of presets) expect(parseConfig(serializeConfig(preset.config))).toEqual(preset.config);
  });
  it('rejects corrupt, unsupported and oversized files', () => {
    for (const text of ['{', 'null', JSON.stringify({version:2,config:defaults}), ' '.repeat(10001)]) {
      expect(() => parseConfig(text)).toThrow();
    }
  });
  it('rejects invalid fields before they can reach the renderer', () => {
    const patches = [{seed:-1},{seed:4294967296},{seed:1.5},{density:0},{density:37},{density:'18'},
      {layout:'unknown'},{palette:'unknown'},{title:'x'.repeat(61)},{title:'a\nb\nc\nd\ne'},{subtitle:null}];
    for (const patch of patches) expect(() => parseConfig(JSON.stringify({version:1,config:{...defaults,...patch}}))).toThrow();
  });
  it('only imports known fields and preserves the original object', () => {
    const value = {...defaults, extra:'ignored'};
    expect(parseConfig(JSON.stringify({version:1,config:value}))).toEqual(defaults);
    expect(value.extra).toBe('ignored');
  });
});

describe('poster undo history', () => {
  it('undoes sample replacement without mutating the old state', () => {
    const state: PosterState = {config:{...defaults,title:'My draft'},history:[]};
    const next = posterReducer(state,{type:'update',config:presets[1].config});
    expect(posterReducer(next,{type:'undo'})).toEqual(state);
    expect(state.history).toEqual([]);
  });
  it('ignores identical updates and caps history at 20 valid edits', () => {
    let state: PosterState = {config:defaults,history:[]};
    expect(posterReducer(state,{type:'undo'})).toBe(state);
    expect(posterReducer(state,{type:'update',config:{...defaults}})).toBe(state);
    for (let seed=0;seed<25;seed++) state=posterReducer(state,{type:'update',config:{...defaults,seed}});
    expect(state.history).toHaveLength(20);
    for (let i=0;i<20;i++) state=posterReducer(state,{type:'undo'});
    expect(state.config.seed).toBe(4);
    expect(posterReducer(state,{type:'undo'})).toBe(state);
  });
});
