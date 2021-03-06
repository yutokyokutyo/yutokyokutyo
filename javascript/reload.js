
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>My Vue.js Practice</title>
</head>
<body>

<div id="parent">
    <user-profile ref="profile"></user-profile>
</div>

<script src="http://cdnjs.cloudflare.com/ajax/libs/vue/0.11.4/vue.min.js"></script>
<script>
    var parent = new Vue({ el: '#parent' })
    // 子コンポーネントのインスタンスへのアクセス
    var child = parent.$refs.profile
    cosole.log(child);
</script>
</body>
</html>
