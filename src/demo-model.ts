import type {Locale} from './content';

export const reviewMoments = [
 {time:'00:04',title:{cn:'打开项目',en:'Open project'},note:{cn:'先交代项目上下文，再进入分享。',en:'Establish the project context before opening sharing.'}},
 {time:'00:12',title:{cn:'邀请成员',en:'Invite member'},note:{cn:'这个邮箱需要遮住，保留权限选项即可。',en:'Mask this email address. Keep the permission choices visible.'}},
 {time:'00:26',title:{cn:'确认权限',en:'Check access'},note:{cn:'用“仅受邀成员”收尾，避免误读为公开链接。',en:'End on “Invited members only” so the link is not mistaken for public.'}},
];
export interface CommandItem {id:string;kind:'document'|'action';title:Record<Locale,string>;description:Record<Locale,string>;keywords:string;disabled?:boolean}
export const commandItems:CommandItem[] = [
 {id:'sharing',kind:'document',title:{cn:'分享与权限',en:'Sharing & permissions'},description:{cn:'文档 / 工作区指南',en:'Document / Workspace guide'},keywords:'share sharing access permission 分享 权限'},
 {id:'shortcuts',kind:'document',title:{cn:'键盘快捷键',en:'Keyboard shortcuts'},description:{cn:'文档 / 快速开始',en:'Document / Getting started'},keywords:'keyboard shortcut keys 键盘 快捷键'},
 {id:'export',kind:'document',title:{cn:'导出检查清单',en:'Export checklist'},description:{cn:'文档 / 发布之前',en:'Document / Before publishing'},keywords:'export download checklist 导出 下载 检查'},
 {id:'delete',kind:'action',title:{cn:'删除当前项目',en:'Delete current project'},description:{cn:'不可用 · 当前为访客，需要管理员权限',en:'Unavailable · Guest role requires admin access'},keywords:'delete remove 删除 移除',disabled:true},
];
export function searchCommands(query:string) {
 const tokens=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
 return commandItems.filter(item=>tokens.every(token=>(Object.values(item.title).join(' ')+' '+item.keywords).toLocaleLowerCase().includes(token)));
}
export function moveCommand(items:CommandItem[],current:number,direction:1|-1) {
 if(!items.some(item=>!item.disabled))return -1;
 let next=current;
 for(let count=0;count<items.length;count++){
  next=(next+direction+items.length)%items.length;
  if(!items[next].disabled)return next;
 }
 return -1;
}
export const slideSamples:Record<Locale,string> = {
 cn:'# 让重试变得安全\n一次请求，一个稳定的身份\n\n- 创建 idempotency key\n- 服务端检查执行记录\n- 返回第一次成功的结果',
 en:'# Make retries safe\nOne request, one stable identity\n\n- Create an idempotency key\n- Check the execution record\n- Return the first successful result',
};
// Deliberately small grammar. React renders all strings as text; no raw HTML.
export function parseSlide(source:string,fallback='Untitled') {
 const lines=source.split(/\r?\n/),heading=lines.find(line=>/^#\s+/.test(line));
 return {
  title:heading?.replace(/^#\s+/,'').trim()||fallback,
  body:lines.filter(line=>line.trim()&&!/^#\s+/.test(line)&&!/^\s*-\s+/.test(line)).join(' '),
  points:lines.filter(line=>/^\s*-\s+/.test(line)).map(line=>line.replace(/^\s*-\s+/,'').trim()),
 };
}
