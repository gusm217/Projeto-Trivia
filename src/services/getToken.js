export default async function getToken() {
  const URL = 'https://opentdb.com/api_token.php?command=request';
  const data = await fetch(URL);
  const json = await data.json();
  const { token } = json;
  return token;
}
