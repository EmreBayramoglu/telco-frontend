// HTTP Request Nedir?

//  Request istemcinin sunucu tarafına gerçekleştirdiği istek çağırma mesajlarıdır. Tam olarak Web sitesi ile ilgili ne yapacağımızı bildiririz. Bu sayede Post ile veri gönderebilir, Get ile verileri çekebilir, put ile bilgileri güncelleyebilir, delete ile silme işlemi gerçekleştiririz.En çok kullanılan http requestleri ise get, post, put ve delete'dir.

//  POST : Sunucuya veri göndermek için kullanılır, bodyRequest(body : fromdata, parametre, multipart : resim yada video gönderme)

//  PUT : Sunucuya veri göndermek için ama gönderilen veriler ile bir dosya yaratmak için kullanılır. Eğer dosya sunucuda varsa üzerinde değişiklik yapar.

//  DELETE : Sunucudaki kaynağı silmek için kullanılır. Silme işlemi yaparken kaynağı sorgulamadan bu işlemi yapar.

//  GET : Sunucudan dosya / veri almak için kullanılır.

// Head : Aslında get methodu ile aynı işi yapar gönderilen veri aynıdır sunucuda olan işlemler aynıdır sunucudaki cevabı dönerken header kısmını döner

//  Trace : Sunucuyu kontrol amaçlı kullanılır bunun dışında başka bir sunucu üzerinde işlem yapmak için kullanılır

//  Options : Sunucunun hangi methodlara kabul ettigini öğrenmek için kullanılır.

//  Connection : Sunucuyu proxy gibi kullanabilmemizi sağlar yani sunucunun başka bir sunucuya istek yapmasını saglayabiliriz.

//  Path : Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar. örnegin sadece adamın epostasını değiştirmek istiyoruz.
