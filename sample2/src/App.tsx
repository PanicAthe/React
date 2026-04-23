import './App.css'
import Textarea from './component/TextareaTest';
import Welcome from './component/Welcome';
import ProfileCard from './component/ProfileCard';

function App() {
  return (
    <div className="App">
      <Textarea />
      <Welcome name="Sara" />
      <ProfileCard
        name="Sara"
        role="Frontend"
        score={92}
        isOnline={true}
      />
      <ProfileCard
        name="Minho"
        role="Backend"
        score={77}
        isOnline={false}
      />
    </div>
  )
}


export default App
