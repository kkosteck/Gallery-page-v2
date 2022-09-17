source ./venv/bin/activate
pip install -r requirements.txt
git pull
python manage.py migrate
python manage.py collectstatic --noinput
sudo systemctl restart apache2