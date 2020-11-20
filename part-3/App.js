const App = () => (
    <div>
        <Person name='Trey' age={25} hobbies={['anime', 'video games']}/>
        <Person name='Junior' age={3} hobbies={['crying', 'eating', 'sleeping']}/>
        <Person name='Elizabeth' age={32} hobbies={['quilting', 'gardening']}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));