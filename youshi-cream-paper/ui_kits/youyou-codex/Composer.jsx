// Shared bottom composer for the Youyou Codex kit.
window.YY = window.YY || {};
(function(){
  const DS = window.DesignSystem_4278dc;
  const { Chip, IconButton, Icon, Decoration } = DS;

  function Composer({ value, onChange, onSend, placeholder, model, projectLabel='选择项目', compact=false }) {
    const [modelOpen, setModelOpen] = React.useState(false);
    const send = () => { if(value.trim()) onSend(); };
    const onKey = e => { if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(); } };
    return (
      <div style={{position:'relative',background:'var(--surface-card-hi)',border:'1px solid var(--border-hair)',
        borderRadius:'var(--radius-2xl)',boxShadow:'var(--shadow-md)',padding:'14px 16px 12px'}}>
        <Decoration name="sparkle" size={26} mono color="var(--gold-400)" opacity={0.5}
          style={{position:'absolute',top:12,right:16}}/>
        {/* context row */}
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
          <Chip leftIcon="folder" variant="outline" size="sm">{projectLabel}</Chip>
          <Chip variant="plain" size="sm" leftIcon="git-pull-request">main</Chip>
        </div>
        {/* input */}
        <textarea value={value} onChange={e=>onChange(e.target.value)} onKeyDown={onKey}
          rows={compact?1:2} placeholder={placeholder}
          style={{width:'100%',border:0,outline:'none',resize:'none',background:'transparent',
            font:'inherit',fontSize:'var(--text-md)',color:'var(--ink-800)',lineHeight:1.5,
            fontFamily:'var(--font-sans)'}}/>
        {/* action row */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:8}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <IconButton icon="plus" label="添加" variant="soft" size="sm"/>
            <Chip leftIcon="lock" variant="plain" size="sm" style={{color:'var(--gold-600)'}}>完全访问</Chip>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:8,position:'relative'}}>
            <button onClick={()=>setModelOpen(o=>!o)} style={{display:'inline-flex',alignItems:'center',gap:5,
              border:0,background:'transparent',font:'inherit',fontSize:13,fontWeight:600,color:'var(--text-muted)',
              cursor:'pointer',padding:'5px 8px',borderRadius:'var(--radius-pill)'}}
              onMouseEnter={e=>e.currentTarget.style.background='var(--sage-100)'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              <Icon name="sparkle" size={14} fill color="var(--gold-500)"/>{model.name}
              <Icon name="chevron-down" size={13}/>
            </button>
            {modelOpen && (
              <div style={{position:'absolute',bottom:'calc(100% + 8px)',right:0,minWidth:150,
                background:'var(--surface-card-hi)',border:'1px solid var(--border-hair)',borderRadius:'var(--radius-md)',
                boxShadow:'var(--shadow-lg)',padding:6,zIndex:20}}>
                {model.options.map(o=>(
                  <div key={o} onClick={()=>setModelOpen(false)} style={{padding:'7px 10px',borderRadius:8,fontSize:13,
                    fontWeight:o===model.name?700:500,color:o===model.name?'var(--sage-700)':'var(--ink-600)',
                    background:o===model.name?'var(--sage-100)':'transparent',cursor:'pointer'}}>{o}</div>
                ))}
              </div>
            )}
            <IconButton icon="mic" label="语音输入" variant="ghost" size="sm"/>
            <IconButton icon="arrow-up" label="发送" variant="primary" onClick={send}/>
          </div>
        </div>
      </div>
    );
  }
  window.YY.Composer = Composer;
})();
