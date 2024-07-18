FROM python:3.9

ENV APP_PORT=8080
ENV MODE=local

WORKDIR /code

COPY ./app/requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

EXPOSE ${APP_PORT}

CMD uvicorn app.main:app --host 0.0.0.0 --port 8080 ${APP_PORT}