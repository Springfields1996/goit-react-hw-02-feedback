import React from 'react';
import { Feedback } from './Feedback/Feedback';
// import { TextField } from './TextField';

export const App = params => (
  <>
    <Feedback />
  </>
);

// class App extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   componentDidMount() {
//     this.setState(prev => ({ ...prev, people: ['Ben', 'Bob'] }));
//   }

//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.setState(prev => ({
//       ...prev,
//       contacts: [
//         ...prev.contacts,
//         { name: this.state.name, number: this.state.number },
//       ],
//     }));
//     this.setState({ name: '', number: '' });
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState(prev => ({ ...prev, [name]: value }));
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
//         <TextField
//           label={'contacts'}
//           handleChange={this.handleChange}
//           value={name}
//         />
//         <TextField
//           label={'number'}
//           handleChange={this.handleChange}
//           value={number}
//         />
//       </form>
//     );
//   }
// }

// const initialState = {
//   contacts: [],
//   name: '',
//   number: '',
// };

// export function App() {
//   const [state, setState] = React.useState({ ...initialState });

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     setState(prev => ({
//       ...prev,
//       contacts: [...prev.contacts, { name: state.name, number: state.number }],
//     }));
//     setState({ name: '', number: '' });
//   };

//   const handleChange = ({ target: { name, value } }) => {
//     setState(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <form noValidate autoComplete="off" onSubmit={handleSubmit}>
//       <TextField
//         label={'contacts'}
//         handleChange={handleChange}
//         value={state.name}
//       />
//       <TextField
//         label={'number'}
//         handleChange={handleChange}
//         value={state.number}
//       />
//     </form>
//   );
// }
