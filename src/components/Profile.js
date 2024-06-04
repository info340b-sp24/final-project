import React, { useState, useEffect } from 'react';
import {getDatabase, ref as dbRef, onValue } from 'firebase/database';
import ProfileInfo from './profile_components/ProfileInfo'

export default function Profile(props) {
  const currentUser = props.currentUser;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = currentUser.userId;
    const db = getDatabase();
    const userRef = dbRef(db, "users/" + userId);

    const unregisterFunction = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      setUserData(userData);
    });

    const cleanup = () => {
      unregisterFunction();
    }

    return cleanup;
  }, [currentUser]);

  return (
    <div>
      <MainProfile currentUser={userData}/>
    </div>
  );
}

function MainProfile(props) {
  const currentUser = props.currentUser;

  return (
    <main className="container-fluid mx-5 mt-3">
      {/* <header className="pt-3">
        <h1>My Profile</h1>
      </header> */}

      <ProfileInfo currentUser={currentUser}/>
      <hr />

      <article>
        <ProfileProjects />
      </article>
    </main>
  );
}

function ProfileProjects(props) {
  return (
    <section>
      <h2>My Projects</h2>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <div className="card">
            <img className="card-img-top" src="img/projects/p4.jpg" alt="shoe shopping app mockup" />
            <div className="card-body">
              <h3 className="card-title">Shoeholic</h3>
              <p className="card-text">An app for sneakerheads.</p>
              <img className="arrow" src="img/icons/arrow.png" alt = "arrow button" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

