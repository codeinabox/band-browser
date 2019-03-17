export default name => fetch(`/api/artists/?name=${encodeURI(name)}`)
  .then(res => res.json())

