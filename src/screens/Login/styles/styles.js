import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#C8E6C9',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#9F9F9F',
    borderRadius: 3,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
  },
  button: {
    borderWidth: 1,
    borderColor: '#9F9F9F',
    borderRadius: 3,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#FF9800',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
});

export default styles;
