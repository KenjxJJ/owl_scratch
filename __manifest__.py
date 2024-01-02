{
    "name": "Odoo OWL",
    "depends": ['base', 'web'],
    "author": "KenjxJJ",
    'summary': 'OWL Framework Practice',
    "installable": True,
    "application": True,
    'data': [
        # 'security/ir.model.access.csv',
        'views/menus.xml',
        'views/views.xml',
        ]
    ,
    "assets": {
        'web.assets_backend': [
            "owl_scratch/static/src/components/*/*.js",
            "owl_scratch/static/src/components/*/*.xml",
            "owl_scratch/static/src/components/*/*.scss",
        ]
    }
}
