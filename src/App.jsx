import CourseNavigator from './python-course-modules/CourseNavigator'
import './App.css'


function App() {
  return (
    <>
      <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        {/* Python Logo in its own flex box */}
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Learn Python for Free</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f3f4f6', borderRadius: 12, padding: '16px 24px', marginBottom: 4, boxShadow: '0 1px 6px rgba(0,0,0,0.04)' }}>
         
          <img src="/python.png" alt="Python Logo" style={{ width: 64, height: 64, objectFit: 'contain', display: 'block' }} />
        </div>
        
        <p style={{ fontSize: 16, color: '#374151', margin: 0 }}>several projects and resources on the basics</p>
      </header>
      <CourseNavigator />
    </>
  )
}

 

export default App
