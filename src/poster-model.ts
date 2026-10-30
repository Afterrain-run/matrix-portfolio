export type LayoutId = 'grid' | 'orbit' | 'wave';
export type PaletteId = 'mint' | 'signal' | 'desert';
export interface PosterConfig {
  title: string;
  subtitle: string;
  layout: LayoutId;
  palette: PaletteId;
  density: number;
  seed: number;
}
export const storageKey = 'afterrain.poster.v1';
export const defaults: PosterConfig = {
  title: 'STAY\nCURIOUS', subtitle: 'MAKE IDEAS REAL · 2026',
  layout: 'grid', palette: 'mint', density: 18, seed: 20261028,
};
export const presets: {id: string; name: {cn: string; en: string}; config: PosterConfig}[] = [
  {id: 'curious', name: {cn: '保持好奇', en: 'Stay curious'}, config: defaults},
  {id: 'orbit', name: {cn: '沿轨道探索', en: 'Find your orbit'}, config: {...defaults, title: 'FIND YOUR\nORBIT', subtitle: 'SMALL STEPS. NEW PERSPECTIVES.', layout: 'orbit', palette: 'signal', seed: 881203, density: 24}},
  {id: 'wave', name: {cn: '让想法流动', en: 'Ideas in motion'}, config: {...defaults, title: 'IDEAS IN\nMOTION', subtitle: 'EXPERIMENT / ITERATE / REPEAT', layout: 'wave', palette: 'desert', seed: 191028, density: 14}},
];
export function validateConfig(value: unknown): PosterConfig {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid configuration');
  const c = value as Record<string, unknown>;
  if (typeof c.title !== 'string' || c.title.length > 60 || c.title.split('\n').length > 4 ||
      typeof c.subtitle !== 'string' || c.subtitle.length > 58 ||
      !['grid', 'orbit', 'wave'].includes(c.layout as string) ||
      !['mint', 'signal', 'desert'].includes(c.palette as string) ||
      !Number.isInteger(c.density) || (c.density as number) < 6 || (c.density as number) > 36 ||
      !Number.isInteger(c.seed) || (c.seed as number) < 0 || (c.seed as number) > 4294967295) {
    throw new Error('Invalid configuration');
  }
  return {title: c.title, subtitle: c.subtitle, layout: c.layout as LayoutId, palette: c.palette as PaletteId, density: c.density as number, seed: c.seed as number};
}
export function parseConfig(text: string): PosterConfig {
  if (text.length > 10000) throw new Error('Configuration too large');
  const data = JSON.parse(text);
  if (!data || data.version !== 1) throw new Error('Unsupported configuration version');
  return validateConfig(data.config);
}
export function serializeConfig(config: PosterConfig) {
  return JSON.stringify({version: 1, config: validateConfig(config)}, null, 2);
}
export interface PosterState {config: PosterConfig; history: PosterConfig[]}
export type PosterAction = {type: 'update'; config: PosterConfig} | {type: 'undo'};
export function posterReducer(state: PosterState, action: PosterAction): PosterState {
  if (action.type === 'undo') {
    if (!state.history.length) return state;
    return {config: state.history[state.history.length - 1], history: state.history.slice(0, -1)};
  }
  const config = validateConfig(action.config);
  if (serializeConfig(config) === serializeConfig(state.config)) return state;
  return {config, history: [...state.history.slice(-19), state.config]};
}
