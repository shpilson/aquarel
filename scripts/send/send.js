const sendSelector = document.querySelector(".custom_section")

function send() {
sendSelector.insertAdjacentHTML('afterend', `
<div class="container">
    <div class="client_send_form row">
        <div class="send_form col-md-4 col-12">
        <h5 class="contacts__title">Остались вопросы?</h5>
        <ul class="contacts__list">
          
            <form>
                <div class="form-group">>
                  <input type="text" class="form-control" id="client_name" aria-describedby="clientName" placeholder="Ваше имя">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Оставить заявку</button>
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



