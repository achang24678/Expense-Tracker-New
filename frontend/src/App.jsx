import { useMemo, useState } from 'react'
import styled from 'styled-components'
import bg from "./img/bg.png"
import { MainLayout } from './styles/Layouts';
import Orb from "./components/orb/Orb";
import Navigation from "./components/navigation/Navigation";
import Dashboard from './components/dashboard/Dashboard';
import Income from './components/income/Income';
import Expenses from './components/expenses/Expenses';


const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )
}

export default App
