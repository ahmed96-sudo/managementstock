import '../stylesheets/Login.css';
import '../fontawesome-free-5.15.3-web/css/fontawesome.css';
import '../fontawesome-free-5.15.3-web/css/brands.css';
import '../fontawesome-free-5.15.3-web/css/solid.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        const inputuser = document.getElementById("inputuser").value;
        const inputpass = document.getElementById("inputpassword").value;
        const logobj = {
            inputuser: inputuser,
            inputpass: inputpass
        };
        e.preventDefault();
        console.log(logobj);
        navigate("/dashboard");
        /* fetch("https://asyd12855.pythonanywhere.com/login",{
            method: "POST",
            body: JSON.stringify({ logobj: logobj }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                navigate("/dashboard");
            } else {
                alert("Your password/username isn't correct");
            }
        })
        .catch(error => {
            console.error(
                "There has been a problem:",
                error
            );
            alert("There has been a problem with the login");
        }); */
    }
    const handleClick = ()=>{
        const userps = document.getElementById("inputpassword");
        if (userps.type == "password") {
            userps.type = "text";
        } else {
            userps.type = "password";
        }
    }
    return (
        <div className='container'>
            <div className='form_All'>
                <div className='head'>
                    <span id='stspan' className='fas fa-atom'></span>
                    <h1>KingStock</h1>
                </div>
                <form method='POST' onSubmit={handleSubmit}>
                    <input type="text" className='inputs' id='inputuser' required placeholder='UserName' />
                    <input type="password" className='inputs' id='inputpassword' required placeholder='Password' />
                    <label for="showpass"><input type="checkbox" name='showpass' id='showpass' onClick={handleClick} /> Show Password</label>
                    <input type="submit" value="Login" id='submit_login' />
                </form>
            </div>
        </div>
    );
}

export default Login;