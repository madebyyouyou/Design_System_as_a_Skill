// Left sidebar for the Youyou Codex kit.
window.YY = window.YY || {};
(function(){
  const DS = window.DesignSystem_4278dc;
  const { Logo, NavItem, Checkbox, Badge, Avatar, IconButton, Icon } = DS;

  const Cap = ({children}) => (
    <div style={{fontSize:12,fontWeight:700,letterSpacing:'.12em',color:'var(--text-faint)',
      padding:'14px 12px 5px',display:'flex',alignItems:'center',gap:6}}>{children}</div>
  );

  function Sidebar({ data, activeId, onNavigate, tasks, onToggleTask }) {
    const doneCount = tasks.filter(t=>t.done).length;
    return (
      <aside style={{width:'var(--sidebar-w)',flex:'none',height:'100%',display:'flex',flexDirection:'column',
        background:'var(--surface-raised)',borderRight:'1px solid var(--border-hair)'}}>
        {/* brand */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 14px 8px'}}>
          <Logo variant="script" height={26}/>
          <IconButton icon="search" label="搜索" variant="ghost" size="sm"/>
        </div>

        <div style={{flex:1,overflowY:'auto',padding:'4px 10px 10px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:2}}>
            {data.nav.map(n=>(
              <NavItem key={n.id} icon={n.icon} label={n.label} active={activeId===n.id}
                onClick={()=>onNavigate(n.id)}
                trailing={n.badge?<Badge variant="sage" size="sm">{n.badge}</Badge>:null}/>
            ))}
          </div>

          <Cap>项目</Cap>
          <div style={{display:'flex',flexDirection:'column',gap:2}}>
            {data.projects.map(p=>(
              <React.Fragment key={p.id}>
                <NavItem icon={p.open?'folder-open':'folder'} label={p.label}
                  active={activeId===p.id} onClick={()=>onNavigate(p.id)}
                  trailing={p.children?<Icon name="chevron-down" size={14}/>:null}/>
                {p.open && p.children && p.children.map(c=>(
                  <NavItem key={c.id} indent icon="file" label={c.label}
                    active={activeId===c.id} onClick={()=>onNavigate(c.id)}/>
                ))}
              </React.Fragment>
            ))}
          </div>

          <Cap>任务 <Icon name="chevron-right" size={12}/></Cap>
          <div style={{display:'flex',flexDirection:'column',gap:2}}>
            {tasks.map(t=>(
              <NavItem key={t.id} indent label={t.done
                  ? <span style={{color:'var(--ink-400)',textDecoration:'line-through',textDecorationColor:'var(--ink-300)'}}>{t.label}</span>
                  : t.label}
                leading={<Checkbox shape="circle" checked={t.done} onChange={()=>onToggleTask(t.id)}/>}/>
            ))}
          </div>
        </div>

        {/* continue setup */}
        <div style={{padding:'8px 12px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'9px 12px',
            background:'linear-gradient(135deg,var(--sage-200) 0%,var(--sage-100) 60%,var(--cream-50) 100%)',
            border:'1px solid var(--sage-300)',borderRadius:'var(--radius-md)',cursor:'pointer'}}>
            <span style={{display:'inline-flex',alignItems:'center',gap:7,fontSize:13,fontWeight:700,color:'var(--sage-700)'}}>
              <Icon name="heart" size={14} fill color="var(--rose-500)"/>继续设置
            </span>
            <Badge variant="sage" size="sm">{doneCount}/4</Badge>
          </div>
        </div>

        {/* footer */}
        <div style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderTop:'1px solid var(--border-hair)'}}>
          <Avatar name="momo" size="sm" tone="rose" status/>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:13,fontWeight:700,color:'var(--ink-700)',lineHeight:1.1}}>momo</div>
            <div style={{fontSize:11,color:'var(--ink-400)'}}>千纸鹤 · 会员</div>
          </div>
          <IconButton icon="settings" label="设置" variant="ghost" size="sm"/>
        </div>
      </aside>
    );
  }
  window.YY.Sidebar = Sidebar;
})();
