const App = () => (
    <div>
        <Tweet name='wint' username='@dril' date='11/09/2020' message='This is my tweet'/>
        <Tweet name='Drake' username='@drake' date='11/09/2020' message='Look I am also Tweeting'/>
        <Tweet name='Wes Bos' username='@wesbos' date='11/09/2020' message='Is anyone here?'/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));