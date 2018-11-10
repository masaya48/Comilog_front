import React, { Component } from 'react';
import { faEnvelope,  } from '@fortawesome/free-solid-svg-icons';
import Logo from '../atoms/logo';
import Button from '../atoms/button';

const styles = {
  mainButton: {
    backgroundColor: '#EF8EDC'
  },
  twitterButton: {
    backgroundColor: '#6EC6DD'
  },
  registerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '840px',
    height: '200px',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '30px auto',
  },
  textBox: {
    width: '400px'
  }
}

export default class Login extends Component {

  handleClickMailRegistButton() {
    console.log('regist by mail-adress');
  }

  handleClickTwitterRegistButton() {
    console.log('regist by twitter');
  }

  handleClickMailLoginButton() {
    console.log('login by mail-adress');
  }

  handleClickTwitterLoginButton() {
    console.log('login by twitter');
  }

  render() {
    return (
      <main>
        <h1>
          <figure>
            <Logo path={'http://placehold.it/1000x300'}></Logo>
          </figure>
        </h1>
        <section style={styles.registerContainer}>
          <Button
            updateStyle={styles.mainButton}
            text={'メールアドレスで登録'}
            icon={faEnvelope}
            onClick={this.handleClickMailRegistButton}
          ></Button>
          <Button
            updateStyle={styles.twitterButton}
            text={'Twitterアカウントで登録'}
            icon={faEnvelope}
            onClick={this.handleClickTwitterRegistButton}
          ></Button>
        </section>
        <section style={styles.loginContainer}>
          <input type="text" placeholder="メールアドレス" style={styles.textBox}></input>
          <input type="password" placeholder="パスワード" style={styles.textBox}></input>
          <Button
            updateStyle={styles.mainButton}
            text={'メールアドレスでログイン'}
            icon={faEnvelope}
            onClick={this.handleClickMailLoginButton}
          ></Button>
          <Button
            updateStyle={styles.twitterButton}
            text={'Twitterアカウントでログイン'}
            icon={faEnvelope}
            onClick={this.handleClickTwitterLoginButton}
          ></Button>
        </section>
      </main>
    )
  }
}
