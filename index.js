function someFoo() {
  let s = 5
  function someFoo() {
    s = 10
  }
  console.log(s)
  someFoo()
  console.log(s)
}
someFoo()


