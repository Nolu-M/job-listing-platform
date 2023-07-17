const [emailAlert, setEmailAlert] = useState ({
        job: '',
        province: '',
        city: '',
        email: ''
    })

    const handleInput = (e) => {
        e.persist();
        setEmailAlert({...emailAlert, [e.target.name]: e.target.value });
    }

    const saveEmailAlert = (e) => {
        e.preventDefault();

        const form = e.target

        const data = {
            job: emailAlert.job,
            province: emailAlert.province,
            city: emailAlert.city,
            email: emailAlert.email,
        }

        const formData = new formData(form)

        <div>
                    <input type="email" placeholder='Email Address' name='email' value={emailAlert.email} onChange={handleInput} className='m-4 w-9/12 p-4 border-2'/>
                </div>
