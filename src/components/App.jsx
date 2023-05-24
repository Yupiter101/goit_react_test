import Header from "./header/header";
import { Footer } from "./footer/footer";
import ProdList from "./prodList/prodList";
import { Alert } from "./alert/alert";
import { Hero } from "./hero/hero";
import About from "./about/about";
import Team from "./team/team";
import { User } from "./User/User";
import userData from './DATA/user.json';
// console.log(userData);

export const App = () => {
  const a = 2
  return (
    <div>
      <Header g={20}>My-children</Header>
      <Hero active={false}>I am HERO</Hero>
      <About></About>
      <Team></Team>

      <User users={userData}/>

      <Alert variant="info">I am info</Alert>
      <Alert variant="error">I am error</Alert>
      <Alert variant="success">I am success</Alert>
      <Alert variant="warning">I am warning</Alert>

      <ProdList></ProdList>
      React homework {a} template

      <Footer></Footer>
    </div>
  );
};


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
