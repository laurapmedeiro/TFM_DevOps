import { IonCard, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTextarea, IonList, IonItem, IonInput, IonButton, useIonRouter } from '@ionic/react';
import { useParams } from 'react-router';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';


const Login: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
	const router = useIonRouter();

  const postData = () => {
    console.log("username: ", username);
    console.log("password: ", password);

    if (username == null || username == ""){
      alert("Username cannot be empty")
    }
    if (password == null || username == ""){
      alert("Password cannot be empty")
    } else {
      axios.post(`http://localhost:8080/api/auth/signin`, {
      username,
      password
      }).then((response: any) => {
        console.log(response);
        if (response.data != null ){
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("roles", response.data.roles);
          router.push("/page/my-account", "forward", "push")
        } else {
          alert("Error while doing login. Please retry later")
        }
      }).catch((error: any) => {
        alert("Cannot login. Username or password incorrect")
      })
    }  
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent  >
            <IonList >
              <IonItem className='itemLogin'>
                <IonInput label="Username" type="text" placeholder=" your username" onIonInput={(e: any) => setUserName(e.target.value)}></IonInput>
              </IonItem>
              <IonItem className='itemLogin'>
                <IonInput  label= "Password" type="password" placeholder="your password" onIonInput={(e: any) => setPassword(e.target.value)}></IonInput>
              </IonItem>
            </IonList>    

            <IonButtons style = {{alignItems: "center"}} >
              <IonButton style={{ marginLeft: "auto", color: "black", backgroundColor: "white"}} onClick={postData} type='submit' > Login </IonButton>
              <IonButton style={{ marginRight: "auto", color: "white", backgroundColor: "black"}}> Cancel </IonButton>   
            </IonButtons>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
