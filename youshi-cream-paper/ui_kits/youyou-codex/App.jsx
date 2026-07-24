// Root app — wires the Youyou Codex kit together with fake interactivity.
window.YY = window.YY || {};
(function(){
  const DS = window.DesignSystem_4278dc;
  const D = window.YY_DATA;

  function App(){
    const [view, setView] = React.useState('home');       // 'home' | 'task'
    const [activeId, setActiveId] = React.useState('new');
    const [showSidebar, setShowSidebar] = React.useState(true);
    const [tasks, setTasks] = React.useState(D.tasks);
    const [messages, setMessages] = React.useState(D.chat);
    const [title, setTitle] = React.useState('检查 奶油宣纸皮肤');
    const [composer, setComposer] = React.useState('');
    const replyIdx = React.useRef(0);

    const toggleTask = id => setTasks(ts => ts.map(t => t.id===id ? {...t, done:!t.done} : t));

    const pushReply = () => {
      const r = D.replies[replyIdx.current % D.replies.length];
      replyIdx.current++;
      setTimeout(() => setMessages(ms => [...ms, { from:'assistant', text:r }]), 600);
    };

    const sendInTask = () => {
      const text = composer.trim(); if(!text) return;
      setMessages(ms => [...ms, { from:'user', text }]);
      setComposer('');
      pushReply();
    };

    const startTask = (text, newTitle) => {
      const t = text.trim(); if(!t) return;
      setTitle(newTitle || '新任务');
      setMessages([{ from:'user', text:t }]);
      setComposer('');
      setView('task');
      setActiveId('new');
      pushReply();
    };

    const onNavigate = id => {
      setActiveId(id);
      if(id==='new'){ setView('home'); return; }
      if(id==='chat'){ setView('task'); setTitle('聊天'); return; }
      // project / child / other nav → task view
      const child = D.projects.flatMap(p=>p.children||[]).find(c=>c.id===id);
      const proj = D.projects.find(p=>p.id===id);
      if(child){ setTitle(child.label); setMessages(D.chat); setView('task'); }
      else if(proj){ setTitle(proj.label); setMessages(D.chat); setView('task'); }
      else { setView('task'); }
    };

    return (
      <div style={{position:'fixed',inset:0,display:'flex',flexDirection:'column',background:'var(--surface-canvas)'}}
        className="paper-canvas">
        <window.YY.TopBar onToggleSidebar={()=>setShowSidebar(s=>!s)} onBack={()=>setView('home')}/>
        <div style={{flex:1,display:'flex',minHeight:0}}>
          {showSidebar && (
            <window.YY.Sidebar data={D} activeId={activeId} onNavigate={onNavigate}
              tasks={tasks} onToggleTask={toggleTask}/>
          )}
          <main style={{flex:1,minWidth:0,position:'relative',zIndex:1}}>
            {view==='home'
              ? <window.YY.Home data={D} composerValue={composer} onComposerChange={setComposer}
                  onSend={()=>startTask(composer, '新任务')} onAction={intent=>startTask(intent, '新任务')}/>
              : <window.YY.Task data={D} title={title} messages={messages}
                  composerValue={composer} onComposerChange={setComposer} onSend={sendInTask}/>}
          </main>
        </div>
      </div>
    );
  }
  window.YY.App = App;

  const root = document.getElementById('root');
  if(root && window.DesignSystem_4278dc){
    ReactDOM.createRoot(root).render(<App/>);
  } else if(root){
    root.innerHTML = '<div style="padding:40px;font-family:sans-serif;color:#8a2a2a">Design-system bundle not loaded yet. It is generated at the end of the turn — reload after the compile.</div>';
  }
})();
