const Person = ({ name, age, hobbies }) => (
    <div>
        <p>Learn some information about this person.</p>
        <p><b>Name:</b> {name.length > 8 ? name.slice(0, 6) : name}</p>
        <p><b>Age:</b> {age}</p>
        <h3>{age >= 18 ? 'Please go vote!' : 'You must be 18'}</h3>
    </div>
);