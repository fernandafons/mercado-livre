import app from './app'

const PORT = process.env.PORT || 3001;
// app.listen(process.env.PORT).then(() => console.log(`Server listening on ${PORT}`))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});