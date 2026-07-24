// Slim window chrome for the Youyou Codex kit.
window.YY = window.YY || {};
(function(){
  const DS = window.DesignSystem_4278dc;
  const { IconButton, Icon } = DS;

  function TopBar({ onToggleSidebar, onBack }) {
    const menu = ['文件', '编辑', '视图', '帮助'];
    return (
      <header style={{height:44,flex:'none',display:'flex',alignItems:'center',justifyContent:'space-between',
        padding:'0 12px',background:'var(--surface-raised)',borderBottom:'1px solid var(--border-hair)',
        WebkitUserSelect:'none',userSelect:'none'}}>
        <div style={{display:'flex',alignItems:'center',gap:4}}>
          <IconButton icon="panel-left" label="侧栏" variant="ghost" size="sm" onClick={onToggleSidebar}/>
          <IconButton icon="arrow-left" label="后退" variant="ghost" size="sm" onClick={onBack}/>
          <IconButton icon="arrow-right" label="前进" variant="ghost" size="sm"/>
          <nav style={{display:'flex',gap:2,marginLeft:10}}>
            {menu.map(m=>(
              <button key={m} style={{border:0,background:'transparent',font:'inherit',fontSize:13,fontWeight:600,
                color:'var(--text-muted)',padding:'5px 10px',borderRadius:'var(--radius-sm)',cursor:'pointer'}}
                onMouseEnter={e=>e.currentTarget.style.background='var(--sage-100)'}
                onMouseLeave={e=>e.currentTarget.style.background='transparent'}>{m}</button>
            ))}
          </nav>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <span style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:12,fontWeight:700,
            letterSpacing:'.06em',color:'var(--sage-600)'}}>
            <span style={{width:8,height:8,borderRadius:'50%',background:'var(--sage-500)'}}></span>CREAM PAPER
          </span>
          <div style={{display:'flex',gap:3,color:'var(--text-faint)'}}>
            <WinDot icon="minus"/><WinDot icon="grid"/><WinDot icon="x"/>
          </div>
        </div>
      </header>
    );
  }
  function WinDot({icon}){
    return <button aria-label="window" style={{width:26,height:26,border:0,background:'transparent',borderRadius:8,
      display:'flex',alignItems:'center',justifyContent:'center',color:'var(--text-faint)',cursor:'pointer'}}
      onMouseEnter={e=>e.currentTarget.style.background='var(--sage-100)'}
      onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
      <Icon name={icon} size={13}/></button>;
  }
  window.YY.TopBar = TopBar;
})();
