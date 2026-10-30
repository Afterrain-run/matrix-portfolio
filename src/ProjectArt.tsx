import PosterLab, {PosterCover} from './PosterLab';
import {useId,useState,type ReactNode} from 'react';
import type {Locale} from './content';
import {commandItems,moveCommand,parseSlide,reviewMoments,searchCommands,slideSamples} from './demo-model';
import './project-art.css';

type DemoProps={interactive?:boolean;locale?:Locale};
function DemoControl({interactive,children,onClick,active,className='',label}:{interactive?:boolean;children:ReactNode;onClick:()=>void;active?:boolean;className?:string;label?:string}) {
 return interactive?<button className={className} onClick={onClick} aria-pressed={active} aria-label={label}>{children}</button>:<div className={className} data-active={active}>{children}</div>;
}
function Cutroom({interactive=false,locale='en'}:DemoProps) {
 const [moment,setMoment]=useState(1),[masked,setMasked]=useState(true);
 const cn=locale==='cn',selected=reviewMoments[moment];
 return <div className="cr-editor">
  <div className="mock-toolbar"><b><span className="mock-symbol">◧</span> cutroom</b><span>onboarding-review.take</span><small>{cn?'本地演示':'LOCAL DEMO'}</small></div>
  <div className="cr-workspace">
   <div className="cr-library"><small>{cn?'素材':'LIBRARY'}</small><div className="cr-file is-current"><span>▣</span><b>onboarding.mov</b><small>00:32 · 1920 × 1080</small></div><div className="cr-file"><span>▤</span><b>review-notes.md</b><small>{cn?'3 条标注':'3 review notes'}</small></div><div className="cr-library-footer">1 {cn?'源文件':'source'}<br/>3 {cn?'审阅时间点':'review moments'}</div></div>
   <div className="cr-preview-area"><div className="cr-preview-meta"><span>{cn?'示例帧 / 非视频':'SAMPLE FRAME / NOT VIDEO'}</span><span>{selected.time} / 00:32</span></div>
    <div className="cr-recorded-frame"><div className="cr-relay-nav"><b>◈ relay</b><span>Project / Onboarding</span><span>AL</span></div><div className="cr-relay-body"><div className="cr-relay-side"><span>Overview</span><span>Documents</span><span>Members</span></div>
     <div className="cr-relay-content">{moment===0?<><small>PRODUCT / 2026</small><h4>Onboarding<br/>refresh</h4><div className="cr-task-row">01 <span>Map the first session</span> ✓</div><div className="cr-task-row">02 <span>Review the invite flow</span> ◌</div></>:<div className="cr-invite"><span className="cr-dialog-crumb">{moment===1?'01 / INVITE':'02 / ACCESS'}</span><h4>{moment===1?(cn?'邀请你的团队':'Invite your team'):(cn?'确认分享范围':'Review link access')}</h4><p>{cn?'Onboarding 项目':'Onboarding project'}</p>{moment===1?<><div className="cr-email-field"><span className={masked?'cr-redacted':''}>{masked?'██████████████':'alex@example.com'}</span><span>⌄</span></div><div className="cr-invite-role"><span>{cn?'权限':'Role'}</span><b>{cn?'可评论':'Can comment'} ⌄</b></div><div className="cr-fake-submit">{cn?'邀请成员':'Send invitation'} ↗</div></>:<><div className="cr-access-lock">⌑</div><b>{cn?'仅受邀成员':'Invited members only'}</b><p>{cn?'链接不会公开此项目':'The link does not make this project public'}</p></>}</div>}
     </div></div></div>
    <div className="cr-preview-footer"><span>◉ {cn?'源文件不变':'Source unchanged'}</span><DemoControl interactive={interactive} active={masked} onClick={()=>setMasked(!masked)} className="cr-mask-toggle" label={cn?'隐私遮罩':'Privacy mask'}>{masked?'▧':'□'} {cn?'隐私遮罩':'Privacy mask'} {masked?'ON':'OFF'}</DemoControl></div>
   </div>
   <div className="cr-review"><small>{cn?'审阅备注':'REVIEW NOTE'}</small><div className="cr-review-avatar">JL</div><b>Jamie L.</b><span className="cr-note-time">{selected.time}</span><p>{selected.note[locale]}</p><span className="cr-note-status">◌ {cn?'待修改 · 示例':'To revise · sample'}</span></div>
  </div>
  <div className="cr-timeline"><div className="cr-ruler"><span>00:00</span><span>00:08</span><span>00:16</span><span>00:24</span><span>00:32</span></div><div className="cr-clips">{reviewMoments.map((item,index)=><DemoControl key={item.time} interactive={interactive} active={moment===index} onClick={()=>setMoment(index)} className={'cr-clip '+(moment===index?'is-current':'')} label={item.time+' '+item.title[locale]}><span>0{index+1}</span><b>{item.title[locale]}</b><small>{item.time}</small></DemoControl>)}</div><div className="cr-waveform" aria-hidden="true">{Array.from({length:96},(_,index)=><i key={index} style={{height:(3+((index*13+7)%19))+'px'}}/>)}</div></div>
 </div>;
}

function Wayfinder({interactive=false,locale='en'}:DemoProps) {
 const cn=locale==='cn',uid=useId(),[query,setQuery]=useState(''),[active,setActive]=useState(0),[opened,setOpened]=useState('');
 const items=searchCommands(query),current=items[active];
 const openedItem=commandItems.find(item=>item.id===opened);
 const docs:Record<string,Record<Locale,string>>={sharing:{cn:'默认保持私密。邀请成员后，再为每个人设置查看或评论权限。公开链接需要由管理员单独开启。',en:'Keep documents private by default. Invite members and choose view or comment access. An admin must separately enable a public link.'},shortcuts:{cn:'输入关键词筛选结果。↑ ↓ 移动高亮，Enter 打开文档，Tab 进入结果列表。',en:'Type to filter. Use ↑ ↓ to move, Enter to open a document, and Tab to enter the result list.'},export:{cn:'导出前检查：移除隐私信息、确认字体可用、核对分享范围。此演示不会创建或上传文件。',en:'Before exporting: remove private information, check fonts and verify access. This demo does not create or upload files.'}};
 function openItem(index:number){const item=items[index];if(item&&!item.disabled){setOpened(item.id);setActive(index)}}
 return <div className="wf-workspace"><div className="wf-background"><div className="mock-toolbar"><b>◈ atlas</b><span>Workspace / Docs</span><small>GUEST</small></div><div className="wf-document"><small>WORKSPACE GUIDE</small><h4>Find your way<br/>back to the work</h4><p>Documents, people, and the things you can do.</p><div className="wf-doc-rule"/><span>01 — Getting started</span><span>02 — Sharing & permissions</span><span>03 — Export checklist</span></div></div>
  <div className="wf-menu"><div className="wf-search"><span aria-hidden="true">⌕</span>{interactive?<input autoComplete="off" aria-label={cn?'搜索文档或命令':'Search documents or commands'} role="combobox" aria-expanded="true" aria-autocomplete="list" aria-controls={uid+'-results'} aria-activedescendant={current?uid+'-'+current.id:undefined} placeholder={cn?'搜索文档或命令…':'Search documents or commands…'} value={query} onChange={event=>{const value=event.target.value;setQuery(value);setActive(searchCommands(value).findIndex(item=>!item.disabled));setOpened('')}} onKeyDown={event=>{if(event.nativeEvent.isComposing)return;if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();setActive(moveCommand(items,active,event.key==='ArrowDown'?1:-1))}if(event.key==='Enter'){event.preventDefault();openItem(active)}}}/>:<span>Search documents or commands…</span>}<kbd>⌘ K</kbd></div>
   <div className="wf-result-label">{cn?'工作区结果':'WORKSPACE RESULTS'} <span>{items.length}</span></div>
   <div id={uid+'-results'} role={interactive?'listbox':undefined} aria-label={interactive?(cn?'搜索结果':'Search results'):undefined} className="wf-results">{items.length?items.map((item,index)=>{const content=<><span className="wf-result-icon">{item.kind==='action'?'⌫':'▤'}</span><span><b>{item.title[locale]}</b><small>{item.description[locale]}</small></span><span className="wf-result-key">{item.disabled?'⌑':'↵'}</span></>;return interactive?<button id={uid+'-'+item.id} role="option" aria-selected={index===active} aria-disabled={item.disabled||undefined} key={item.id} onClick={()=>openItem(index)} onMouseEnter={()=>{if(!item.disabled)setActive(index)}} className={'wf-result '+(index===active?'is-current':'')}>{content}</button>:<div className={'wf-result '+(index===active?'is-current':'')} key={item.id}>{content}</div>}):<div className="wf-no-results">{cn?'没有匹配结果':'No matching results'}<small>{cn?'换个关键词，或清空搜索查看全部命令。':'Try another keyword, or clear your search to see everything.'}</small></div>}</div>
   <div className="wf-keybar"><span>↑ ↓ {cn?'选择':'navigate'}</span><span>↵ {cn?'打开':'open'}</span><span>{cn?'本地示例':'LOCAL DEMO'}</span></div>
  </div>
  {interactive&&<div className="wf-opened" role="status">{openedItem?<><small>{cn?'已打开示例文档':'SAMPLE DOCUMENT OPENED'}</small><h4>{openedItem.title[locale]}</h4><p>{docs[openedItem.id]?.[locale]}</p></>:<p>{cn?'选择一个文档，在这里查看内容。删除命令始终不可用。':'Open a document to read it here. The delete command is always unavailable.'}</p>}</div>}
 </div>;
}

function Margin({interactive=false,locale='en'}:DemoProps) {
 const cn=locale==='cn',[source,setSource]=useState(slideSamples[locale]),[step,setStep]=useState(1);
 const slide=parseSlide(source,cn?'未命名幻灯片':'Untitled slide'),visible=Math.min(step,slide.points.length);
 return <div className="mg-editor"><div className="mock-toolbar"><b>margin<span> /</span></b><span>retries.md</span><small>{cn?'会话草稿':'SESSION DRAFT'}</small></div>
  <div className="mg-split"><div className="mg-source"><div className="mg-pane-title">MARKDOWN <span>01</span></div>{interactive?<textarea aria-label={cn?'编辑幻灯片 Markdown':'Edit slide Markdown'} value={source} maxLength={1600} spellCheck={false} onChange={event=>setSource(event.target.value)}/>:<pre>{source}</pre>}<div className="mg-source-note"># {cn?'标题':'heading'}　- {cn?'列表':'list'}<br/>{cn?'文本渲染 · 不执行 HTML':'Text only · no HTML execution'}</div></div>
   <div className="mg-preview"><div className="mg-pane-title">LIVE PREVIEW <span>16:10</span></div><div className="mg-slide"><span className="mg-slide-kicker">ENGINEERING NOTES / 001</span><h4>{slide.title}</h4><p>{slide.body}</p><ol>{slide.points.slice(0,visible).map((point,index)=><li key={index}><span>0{index+1}</span>{point}</li>)}</ol><div className="mg-slide-footer"><span>Afterrain</span><span>{String(visible).padStart(2,'0')} / {String(slide.points.length).padStart(2,'0')}</span></div></div>
    <div className="mg-present-controls">{interactive?<><button onClick={()=>setStep(Math.max(0,visible-1))} disabled={visible===0}>{cn?'上一步':'Previous'}</button><span aria-live="polite">{visible} / {slide.points.length}</span><button onClick={()=>setStep(visible+1)} disabled={visible>=slide.points.length}>{cn?'下一步':'Next point'} →</button></>:<><span>←</span><span>1 / 3</span><span>→</span></>}</div>
   </div>
  </div>{interactive&&<div className="mg-session-note"><span>{cn?'关闭案例后不保存编辑内容':'Edits are not saved after closing this case'}</span><button onClick={()=>{setSource(slideSamples[locale]);setStep(1)}}>{cn?'恢复示例':'Reset sample'} ↺</button></div>}
 </div>;
}

export function ProjectArt({id}:{id:string}) {
 if(id==='poster')return <PosterCover/>;
 return <div className={'project-visual mock-cover mock-'+id} aria-hidden="true"><div className="mock-cover-label"><span>{id.toUpperCase()} / INTERFACE STUDY</span><span>DESIGNED & CODED</span></div><div className="mock-cover-app">{id==='cutroom'?<Cutroom/>:id==='wayfinder'?<Wayfinder/>:<Margin/>}</div><span className="mock-cover-index">{id==='cutroom'?'01 / REVIEW THE MOMENT':id==='wayfinder'?'02 / FIND THE NEXT ACTION':'03 / WRITE. PREVIEW. PRESENT.'}</span></div>;
}
export function ProjectDemo({id,locale}:{id:string;locale:Locale}) {
 if(id==='poster')return <div className="project-demo demo-poster"><PosterLab locale={locale}/></div>;
 return <div className={'project-demo demo-'+id}>{id==='cutroom'?<Cutroom interactive locale={locale}/>:id==='wayfinder'?<Wayfinder interactive locale={locale}/>:<Margin interactive locale={locale}/>}</div>;
}
