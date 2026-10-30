import {useEffect, useId, useReducer, useRef, useState} from 'react';
import type {Locale} from './content';
import {defaults, parseConfig, posterReducer, presets, serializeConfig, storageKey, type PosterConfig, type LayoutId, type PaletteId} from './poster-model';
import {drawPoster} from './poster-render';
import './poster.css';

export function PosterCanvas({config, small = false}: {config: PosterConfig; small?: boolean}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current, ctx = canvas?.getContext('2d');
    if (canvas && ctx) drawPoster(ctx, config, canvas.width, canvas.height);
  }, [config]);
  return <canvas ref={ref} width={small ? 360 : 900} height={small ? 480 : 1200} role="img" aria-label={config.title.replaceAll('\n', ' · ') || 'Poster'}/>;
}

export function PosterCover() {
  return <div className="project-visual poster-cover" aria-hidden="true">
    <div className="poster-cover-meta"><span>POSTER LAB / GENERATIVE DESIGN</span><span>01 — MAKE SOMETHING</span></div>
    <div className="poster-cover-sheets">{presets.map(p => <div key={p.id}><PosterCanvas config={p.config} small/></div>)}</div>
    <div className="poster-cover-footer"><span>TYPE. TWEAK. EXPORT.</span><span>CANVAS × REACT</span></div>
  </div>;
}

function initialConfig() {
  try {
    const value = localStorage.getItem(storageKey);
    return {config: value ? parseConfig(value) : defaults, message: value ? 'restored' : 'ready'};
  } catch { return {config: defaults, message: 'recovery'}; }
}
function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = name;
  document.body.append(link); link.click(); link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function PosterLab({locale}: {locale: Locale}) {
  const cn = locale === 'cn', uid = useId(), file = useRef<HTMLInputElement>(null);
  const [initial] = useState(initialConfig);
  const [state, dispatch] = useReducer(posterReducer, {config: initial.config, history: []});
  const {config, history} = state;
  const [notice, setNotice] = useState(initial.message);
  const [saved, setSaved] = useState(true), [exporting, setExporting] = useState(false);
  const messages: Record<string, string> = cn ? {
    ready: '从一个样例开始，或直接修改文字。', restored: '已恢复上次保存的配置。', recovery: '无法读取上次配置，已载入默认样例。',
    changed: '预览已更新。', undo: '已撤销上一步。', reset: '已恢复默认样例，可撤销。', imported: '配置已导入，可继续编辑。',
    invalid: '导入失败：请选择有效的 v1 配置 JSON（不超过 10 KB）。原作品未改变。',
    json: '配置 JSON 已准备下载。', png: '1800 × 2400 PNG 已准备下载。', failed: '导出失败，请重试。',
  } : {
    ready: 'Start with a sample or edit the text.', restored: 'Your last configuration has been restored.', recovery: 'Could not read the previous configuration. Loaded the default sample.',
    changed: 'Preview updated.', undo: 'Last change undone.', reset: 'Default sample restored. You can undo this.', imported: 'Configuration imported. Keep creating.',
    invalid: 'Import failed: choose a valid v1 configuration JSON under 10 KB. Your work is unchanged.',
    json: 'Configuration JSON is ready to download.', png: '1800 × 2400 PNG is ready to download.', failed: 'Export failed. Please try again.',
  };
  useEffect(() => {
    try {localStorage.setItem(storageKey, serializeConfig(config)); setSaved(true);}
    catch {setSaved(false);}
  }, [config]);
  function update(patch: Partial<PosterConfig>, message = 'changed') {
    dispatch({type: 'update', config: {...config, ...patch}}); setNotice(message);
  }
  async function importFile(selected: File) {
    try {
      if (selected.size > 10000) throw new Error('Too large');
      const next = parseConfig(await selected.text());
      dispatch({type: 'update', config: next}); setNotice('imported');
    } catch {setNotice('invalid');}
  }
  async function exportPng() {
    setExporting(true);
    try {
      const output = document.createElement('canvas'); output.width = 1800; output.height = 2400;
      const ctx = output.getContext('2d'); if (!ctx) throw new Error('No canvas');
      drawPoster(ctx, config, output.width, output.height);
      const blob = await new Promise<Blob>((resolve, reject) => output.toBlob(value => value ? resolve(value) : reject(new Error('No image')), 'image/png'));
      downloadBlob(blob, `poster-${config.seed}.png`); setNotice('png');
    } catch {setNotice('failed');}
    finally {setExporting(false);}
  }
  return <div className="poster-lab">
    <div className="poster-preview">
      <div className="poster-meta"><span>LIVE CANVAS</span><span>900 × 1200</span></div>
      <PosterCanvas config={config}/>
      <div className="poster-save" role="status">{saved ? (cn ? '● 已自动保存到此浏览器' : '● Saved in this browser') : (cn ? '本地保存不可用，请导出配置备份' : 'Local saving unavailable. Export JSON to keep a copy.')}</div>
      <p className="poster-local">{cn ? '仅保存当前配置。撤销历史不跨会话保留；清理浏览器数据会移除草稿。' : 'Only the current configuration is saved. Undo history lasts for this session; clearing browser data removes the draft.'}</p>
    </div>
    <div className="poster-controls">
      <div className="poster-control-heading"><span>YOUR COMPOSITION</span><b>{cn ? '把它变成你的海报' : 'Make it yours'}</b></div>
      <div className="poster-field"><label htmlFor={uid+'title'}>{cn ? '主标题' : 'Title'} <small>{cn ? '最多 4 行 / 60 字符' : '4 lines / 60 characters'}</small></label><textarea id={uid+'title'} rows={3} maxLength={60} value={config.title} onChange={e => update({title: e.target.value.split('\n').slice(0, 4).join('\n')})}/></div>
      <div className="poster-field"><label htmlFor={uid+'subtitle'}>{cn ? '副标题' : 'Subtitle'}</label><input id={uid+'subtitle'} maxLength={58} value={config.subtitle} onChange={e => update({subtitle: e.target.value})}/></div>
      <fieldset><legend>{cn ? '构图' : 'Composition'}</legend><div className="poster-options">{(['grid','orbit','wave'] as LayoutId[]).map((id, i) => <button type="button" key={id} aria-pressed={config.layout===id} onClick={() => update({layout: id})}>{(cn ? ['网格','轨道','波形'] : ['Grid','Orbit','Wave'])[i]}</button>)}</div></fieldset>
      <fieldset><legend>{cn ? '配色' : 'Palette'}</legend><div className="poster-options">{(['mint','signal','desert'] as PaletteId[]).map((id, i) => <button type="button" key={id} aria-pressed={config.palette===id} onClick={() => update({palette: id})}><i className={'poster-swatch '+id}/>{(cn ? ['薄荷','信号','荒漠'] : ['Mint','Signal','Desert'])[i]}</button>)}</div></fieldset>
      <div className="poster-field"><label htmlFor={uid+'density'}>{cn ? '图案密度' : 'Pattern density'}<output>{config.density}</output></label><input id={uid+'density'} type="range" min={6} max={36} value={config.density} onChange={e => update({density: Number(e.target.value)})}/></div>
      <div className="poster-seed"><span>SEED / {config.seed}</span><button type="button" onClick={() => update({seed: crypto.getRandomValues(new Uint32Array(1))[0]})}>{cn ? '换个构图 ↻' : 'New seed ↻'}</button></div>
      <div className="poster-actions"><button type="button" disabled={!history.length} onClick={() => {dispatch({type:'undo'});setNotice('undo');}}>{cn ? '撤销' : 'Undo'} ↶</button><button type="button" onClick={() => update(defaults, 'reset')}>{cn ? '重置' : 'Reset'}</button><button type="button" className="poster-export" disabled={exporting} onClick={exportPng}>{exporting ? (cn ? '正在导出…' : 'Exporting…') : (cn ? '导出 PNG ↗' : 'Export PNG ↗')}</button></div>
      <div className="poster-transfer"><button type="button" onClick={() => {try {downloadBlob(new Blob([serializeConfig(config)], {type:'application/json'}), `poster-${config.seed}.json`);setNotice('json');} catch {setNotice('failed');}}}>{cn ? '导出配置 JSON' : 'Export JSON'}</button><button type="button" onClick={() => file.current?.click()}>{cn ? '导入配置' : 'Import JSON'}</button><input ref={file} type="file" accept=".json,application/json" hidden aria-label={cn ? '选择配置文件' : 'Choose configuration file'} onChange={e => {const selected = e.target.files?.[0];if (selected) void importFile(selected);e.target.value='';}}/></div>
      <p className="poster-notice" role="status">{messages[notice]}</p>
    </div>
    <div className="poster-gallery"><div><span className="section-kicker">START SOMEWHERE</span><h3>{cn ? '选一张，继续创作' : 'Pick a starting point'}</h3><p>{cn ? '样例会替换当前配置，可撤销。' : 'A sample replaces the current configuration. You can undo it.'}</p></div><div className="poster-presets">{presets.map(p => <button type="button" key={p.id} onClick={() => update(p.config)} aria-label={(cn ? '载入样例：' : 'Load sample: ')+p.name[locale]}><PosterCanvas config={p.config} small/><span>{p.name[locale]} ↗</span></button>)}</div></div>
  </div>;
}
