import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

export default class FormLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLogin: false,
    };
  }

  changeState() {
    this.setState({
      school: 'AdSchool',
    });
  }

  login = () => {
    if (!this.state.username && !this.state.password) {
      Alert.alert('Peringatan', 'Username dan Password Harus Diisi!');
    } else {
      this.setState({
        isLogin: true,
      });
    }
  };

  render() {
    const {username, password, isLogin} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>DPKJ Mobile</Text>
        <View style={styles.line} />

        {/* Isi */}
        <View style={styles.body}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Login
          </Text>
          <View style={styles.WrapperInput}>
            <Text style={{color: 'black', marginBottom: 5}}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan Username"
              value={username}
              onChangeText={username => this.setState({username})}
            />
          </View>

          <View style={styles.WrapperInput}>
            <Text style={{color: 'black', marginBottom: 5}}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukan Password"
              value={password}
              onChangeText={password => this.setState({password})}
              secureTextEntry={true}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <Text style={styles.alternativeLink}>Buat akun</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.alternativeLink}>Lupa Kata Sandi?</Text>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => this.login()}>
              <Text style={styles.textButton}>Log in</Text>
            </TouchableOpacity>
          </View>

          {isLogin && (
            <Text style={{marginTop: 20, fontSize: 18, color: 'seagreen'}}>
              Anda Berhasil Login Dengan Username : {username}{' '}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'seagreen',
  },
  line: {
    borderBottomWidth: 1,
    marginTop: 10,
    borderBottomColor: 'seagreen',
  },
  body: {
    marginTop: 30,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
  },
  WrapperInput: {
    marginTop: 15,
  },
  buttonLogin: {
    marginTop: 30,
    backgroundColor: 'mediumseagreen',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  alternativeLink: {
    fontSize: 16,
    color: 'brown',
    fontWeight: 'bold',
    marginTop: 30,
  },
});
