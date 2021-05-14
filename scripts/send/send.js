const sendSelector = document.querySelector(".custom_section")

function send() {
sendSelector.insertAdjacentHTML('afterend', `
<div class="container">
    <div class="contact-with-map row">
        <div class="send_form col-md-4 col-12">
        <h5 class="contacts__title">Остались вопросы?</h5>
        <ul class="contacts__list">
          
            <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

        </ul>
        </div>
        <div class="contact__map col-md-8 col-12">
        <span>text</span>
        </div>
    </div>
</div>`)
}

export default send;



