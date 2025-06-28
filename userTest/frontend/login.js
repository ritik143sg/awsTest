const handleSUbmit = async (event) => {
  event.preventDefault();
  console.log(event.target.username.value);

  const username = event.target.username.value;
  const password = event.target.password.value;

  const user = {
    username: username,
    password: password,
  };

  try {
    const res = await axios.post("http://13.200.237.174:8000/user/add", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }

  event.target.username.value = "";
  event.target.password.value = "";
};
