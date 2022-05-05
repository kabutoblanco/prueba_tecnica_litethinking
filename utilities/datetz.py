import datetime as dt
import pytz

def get_date(date):
    unaware = dt.datetime.strptime(date, "%Y-%m-%d")
    bogota = pytz.timezone('America/Bogota')
    aware = unaware.replace(tzinfo=bogota)
    return aware.astimezone(pytz.UTC).date()


def get_date_range(days):
    day_min = pytz.timezone('America/Bogota').localize(
        dt.datetime.combine(dt.date.today() - dt.timedelta(days=days), dt.time.min))
    day_max = pytz.timezone('America/Bogota').localize(
        dt.datetime.combine(dt.date.today(), dt.time.max))
    return day_min, day_max