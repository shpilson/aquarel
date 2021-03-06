const sendSelector = document.querySelector(".custom_section")

function send() {
sendSelector.insertAdjacentHTML('afterbegin', `
<div class="container">
    <div class="client_send_form row">
    <div class="send_form col-md-6 col-12" style="background: rgba(255, 255, 255, 0.61);">
    <h5 class="send_title">Остались вопросы?</h5>
    <p>Для подробной консультации по подбору идеального для Вас корсета оставьте заявку</p>
    </div>

        <div class="send_form col-md-6 col-12">
        <ul class="send_list">
          
            <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="client_name" aria-describedby="clientName" placeholder="Ваше имя">
                </div>
                <div class="form-group">
                <input type="text" class="form-control" id="client_phone" aria-describedby="clientPhone" placeholder="Телефон">
                </div>
                <button type="submit" class="btn btn-primary">Оставить заявку</button>
              </form>

        </ul>
        </div>
    </div>
</div>`)
}

export default send;



