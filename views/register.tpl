
<h1 class="logo">Welcome to ShowReel</h1>
<div class="description">
    This is registration page
</div>

<form method="post" action="/register">

    <div class="row">

        <div class="col-sm-12">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Username">
            </div>
        </div>

        <div class="col-sm-12">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="E-mail">
            </div>
        </div>

        <div class="col-sm-12">
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
            </div>
        </div>

    </div>

    <button type="submit" class="btn btn-default">Submit</button>

</form>