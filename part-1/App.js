const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Trey" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));