import Card from './components/card'
import Foo from './components/foo'

function App() {
  return (
    <div>
      <Card />
      <Foo
        bar={'asd'}
        className="asd"
        data={[]}
        foo={{ bar: '3f' }}
        tag={'d23'}
        total={123}
        onFinish={() => {}}
        onShow={() => {}}
      />
    </div>
  )
}

export default App
