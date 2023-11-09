

export const userEmail = () => {

  const localUser = localStorage?.getItem("user");

  const  user= JSON.parse(localUser);
  return user?.email

};
