function getCep(e, t, n, r) {
    var i = document.createElement("span");
    i.classList.add("loading"), e.insertAdjacentElement("afterend", i), jQuery.ajax({
        type: "GET",
        url: "https://viacep.com.br/ws/" + e.value + "/json",
        dataType: "json",
        success: function(o) {
            i.remove(), 1 == o.erro ? (setInputError(e), e.erro = !0, ajaxcallback()) : (e.erro = !1, setInputSuccess(e), ajaxcallback(), n.value = o.localidade, r.value = o.uf, t.value = o.logradouro, "" != o.bairro && (t.value += " - Bairro: " + o.bairro))
        },
        error: function() {
            e.erro = !0, setInputError(e), i.remove()
        }
    })
}