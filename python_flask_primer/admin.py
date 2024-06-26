from flask import render_template, session, redirect, url_for, request, Blueprint
from .models import Product
from . import db 

admin_page = Blueprint('admin_page', __name__, template_folder='templates/admin')

# let us add an app route for admin index page that requires login to access
@admin_page.route("/admin/")
def admin():
    if not logged_in():
        return redirect(url_for('login', next='/admin/'))
    # username in session and user has admin role, continue
    return render_template('index.html', title="ADMIN", information="Here you can administer products, services, etc. Click on what you would like to do")

@admin_page.route("/admin/create-all-tables/")
def create_all_tables():
    # if not logged_in():
    #    return redirect(url_for('login', next='/admin/'))

    # The SQLAlchemy function below does not allow change of schema. To allow schema change, use Flask-Migrate instead
    try:
        db.create_all()
    except Exception as e:
        return 'Tables not created. Reason: {}'.format(e.__cause__)

    return 'Tables successfully created!'


@admin_page.route("/admin/products/")
def products():
    if not logged_in():
        return redirect(url_for('login', next='/admin/products/'))
    # username in session, continue
    # get our registered products from the database
    products = Product.query.all()

    # check whether when products route was called using redirect, information was passed. If not passed, use default message  'Here you can administer products'
    information = request.args.get('information', 'Here you can administer products')
    # check whether when products route was called using redirect, css was passed. If not passed, use default css  'normal'
    css = request.args.get('css', 'normal')
    return render_template('products.html', title="ADMINISTER PRODUCTS", information=information, css=css, products=products)



@admin_page.route("/admin/products/process-product-add/", methods=['POST','GET'])
def process_product_add():
    if not logged_in():
        return redirect(url_for('login', next='/admin/products/'))
    # username in session, continue

    if request.method != 'POST':

        # return to products.html page containing add form. Only POST method is allowed
        error = 'Please use the form to add new products'
        return render_template('products.html', title="ADMINISTER PRODUCTS", information=error, css="error")

    # No problem so far, get the request object and the parameters sent.
    name = request.form['name']
    code = request.form['code']
    description = request.form['description']
    price_per_unit = request.form['price_per_unit']
    product_inception_date = request.form['product_inception_date']


    # let's write to the database
    try:
        product = Product(name=name, code=code, description=description, price_per_unit=price_per_unit,product_inception_date=product_inception_date)
        db.session.add(product)
        db.session.commit()

    except Exception as e:
        error = 'Could not submit. The error message is {}'.format(e.__cause__)
        return render_template('products.html', title="ADMINISTER PRODUCTS", information=error, css="error")

    # no error, continue
    return redirect(url_for('admin_page.products', information="Add successful", css="success"))

@admin_page.route("/admin/products/edit/<int:id>/", methods=['POST','GET'])
def product_edit(id):
    # check database for the product to edit
    product = Product.query.filter_by(id=id).first()
    # send to the edit form
    return render_template('product-edit.html', product=product)

@admin_page.route("/admin/products/detail/<int:id>/")
def  product_detail(id):
    # check database for the product to edit
    product = Product.query.filter_by(id=id).one()
    return render_template('product-detail.html', product=product)


@admin_page.route("/admin/products/process-product-edit/<int:id>/", methods=['POST', 'GET'])
def process_product_edit(id):
    if not logged_in():
        return redirect(url_for('login', next='/admin/products/'))
    # username in session and admin role, continue

    if request.method != 'POST':

        # redirect to signup form. Only POST method is allowed
        error = 'Please use the form to edit products'
        return render_template('products.html', title="ADMINISTER PRODUCTS", information=error, css="error")

    # No problem so far, get the request object and the parameters sent.
    name = request.form['name']
    code = request.form['code']
    description = request.form['description']
    price_per_unit = request.form['price_per_unit']
    product_inception_date = request.form['product_inception_date']


    # let's update the database
    try:
        # Get the existing data from database as object
        product = Product.query.filter_by(id=id).first()
        # Update the fields
        product.name = name
        product.code = code
        product.description = description
        product.price_per_unit = price_per_unit
        product.product_inception_date = product_inception_date
        # commit
        db.session.commit()

    except Exception as e:
        error = 'Could not update product. The error message is {}'.format(e.__cause__)
        return redirect(url_for('admin_page.products', information="Update not successful", css="error"))

    return redirect(url_for('admin_page.products', information="Update successful", css="success"))

@admin_page.route("/admin/products/delete/<int:id>/", methods=['POST', 'GET'])
def product_delete(id):
    if not logged_in():
        return redirect(url_for('login', next='/admin/products/'))
    # username in session and admin role, continue

    # No problem so far
    # let's update the database
    try:
        # Get the existing data from database as object
        product = Product.query.filter_by(id=id).first()
        # Delete the record
        db.session.delete(product)
        # commit
        db.session.commit()

    except Exception as e:
        error = 'Could not delete product. The error message is {}'.format(e.__cause__)
        return redirect(url_for('admin_page.products', information="Delete not successful", css="error"))

    return redirect(url_for('admin_page.products', information="Delete successful", css="success"))

def logged_in():
    if 'username' not in session or 'admin' not in session['userroles']:
        return False
    else:
        return True