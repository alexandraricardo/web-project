import pymysql.cursors


class ConnectBdd:

    def __init__(self):
        self.bdd = pymysql.connect(host="localhost", database="job_board", user="youruser", password="yourpassword",
                                   charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)

    def connect(self):
        cursor = self.bdd.cursor()
        return cursor

    def commit(self):
        self.bdd.commit()

    def disconnect(self):
        self.bdd.close()
