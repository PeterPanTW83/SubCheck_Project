<script language="JavaScript ">
    var obj = document.getElementById("masterBarcode ");
    obj.onkeyup = function () {
      if (obj.value.length == 13) {
        search();
      }
    }
    function search() {
      var fs = require("fs ");
      var file = "./test.db ";
      //載入 sqlite3
      var sqlite3 = require("sqlite3 ").verbose();
      //新增一個sqlite3的資料庫test.db
      var db = new sqlite3.Database(file);
      var i = 0;//判斷是否有資料用的旗標
      db.serialize(function () {
        //查詢資料
        var sql02 = "SELECT rowid AS id, number,type,providers,providers_number,home_page_number,invoice_number,product,mechanism,branch,position
        FROM table01 "; 
        db.each(sql02, function (err, row) {
          console.log(row.id + ": " + row.number);
          if (document.getElementById("masterBarcode ").value == row.number) {
            document.number.number.value = row.number;
            document.type.type.value = row.type;
            document.providers.providers.value = row.providers;
            document.providers_number.providers_number.value = row.providers_number;
            document.home_page_number.home_page_number.value = row.home_page_number;
            document.invoice_number.invoice_number.value = row.invoice_number;
            document.product.product.value = row.product;
            document.mechanism.mechanism.value = row.mechanism;
            document.branch.branch.value = row.branch;
            document.position.position.value = row.position;
            i = 1;
            send(row.id);
          }
        });
        if (i == 0) {
          //document.myForm.yon.value="否 ";
          // document.myForm.name.value=" ";
        }
      });
      db.close();
      console.log(document.getElementById("masterBarcode ").value);
    }
    function create() {
      var fs = require("fs ");
      var file = "./test.db ";
      //載入 sqlite3
      var sqlite3 = require("sqlite3 ").verbose();
      //新增一個sqlite3的資料庫test.db
      var db = new sqlite3.Database(file);
      db.serialize(function () {
        //如果表格test01不存在，就新增test01
        db.run("CREATE TABLE IF NOT EXISTS table01 (number TEXT,type TEXT,providers TEXT,providers_number TEXT,home_page_number
              TEXT, invoice_number TEXT, product TEXT, mechanism TEXT, branch TEXT, position TEXT) ");
        //新增資料
        var sql01 = "INSERT INTO table01(number,type,providers,providers_number,home_page_number,invoice_number,product,mechanism,branch,position)
        VALUES(?,?,?,?,?,?,?,?,?,?) ";			db.run(sql01,["8805308853509 ","类型1 ","物流商1 ","物流编号1 ","首页编号1 ","发票号码1 ","生产产品1
        ","签收机构1 ","分支机构1 ","所在位置1 "]);
        db.run(sql01, ["0000000000002 ", "类型2 ", "物流商2 ", "物流编号2 ", "首页编号2 ", "发票号码2 ", "生产产品2 ", "签收机构2 ", "分支机构2 ", "所在位置2 "]);
        db.run(sql01, ["0000000000003 ", "类型3 ", "物流商3 ", "物流编号3 ", "首页编号3 ", "发票号码3 ", "生产产品3 ", "签收机构3 ", "分支机构3 ", "所在位置3 "]);
        db.run(sql01, ["0000000000004 ", "类型4 ", "物流商4 ", "物流编号4 ", "首页编号4 ", "发票号码4 ", "生产产品4 ", "签收机构4 ", "分支机构4 ", "所在位置4 "]);
        db.run(sql01, ["0000000000005 ", "类型5 ", "物流商5 ", "物流编号5 ", "首页编号5 ", "发票号码5 ", "生产产品5 ", "签收机构5 ", "分支机构5 ", "所在位置5 "]);
        db.run(sql01, ["0000000000006 ", "类型6 ", "物流商6 ", "物流编号6 ", "首页编号6 ", "发票号码6 ", "生产产品6 ", "签收机构6 ", "分支机构6 ", "所在位置6 "]);
        db.run(sql01, ["0000000000007 ", "类型7 ", "物流商7 ", "物流编号7 ", "首页编号7 ", "发票号码7 ", "生产产品7 ", "签收机构7 ", "分支机构7 ", "所在位置7 "]);
        db.run(sql01, ["0000000000008 ", "类型8 ", "物流商8 ", "物流编号8 ", "首页编号8 ", "发票号码8 ", "生产产品8 ", "签收机构8 ", "分支机构8 ", "所在位置8 "]);
        db.run(sql01, ["0000000000009 ", "类型9 ", "物流商9 ", "物流编号9 ", "首页编号9 ", "发票号码9 ", "生产产品9 ", "签收机构9 ", "分支机构9 ", "所在位置9 "]);
        db.run(sql01, ["0000000000010 ", "类型10 ", "物流商10 ", "物流编号10 ", "首页编号10 ", "发票号码10 ", "生产产品10 ", "签收机构10 ", "分支机构10
              ", "所在位置10 "]);
        db.run(sql01, ["0000000000011 ", "类型11 ", "物流商11 ", "物流编号11 ", "首页编号11 ", "发票号码11 ", "生产产品11 ", "签收机构11 ", "分支机构11
              ", "所在位置11 "]);
        db.run(sql01, ["0000000000012 ", "类型12 ", "物流商12 ", "物流编号12 ", "首页编号12 ", "发票号码12 ", "生产产品12 ", "签收机构12 ", "分支机构12
              ", "所在位置12 "]);
        db.run(sql01, ["0000000000013 ", "类型13 ", "物流商13 ", "物流编号13 ", "首页编号13 ", "发票号码13 ", "生产产品13 ", "签收机构13 ", "分支机构13
              ", "所在位置13 "]);
        db.run(sql01, ["0000000000014 ", "类型14 ", "物流商14 ", "物流编号14 ", "首页编号14 ", "发票号码14 ", "生产产品14 ", "签收机构14 ", "分支机构14
              ", "所在位置14 "]);
        db.run(sql01, ["0000000000015 ", "类型15 ", "物流商15 ", "物流编号15 ", "首页编号15 ", "发票号码15 ", "生产产品15 ", "签收机构15 ", "分支机构15
              ", "所在位置15 "]);
        db.run(sql01, ["0000000000016 ", "类型16 ", "物流商16 ", "物流编号16 ", "首页编号16 ", "发票号码16 ", "生产产品16 ", "签收机构16 ", "分支机构16
              ", "所在位置16 "]);
      });
      db.close();
      console.log("create ok ");
    }
    function send(id) {
      SerialPort = require('serialport');
      port = new SerialPort('/dev/ttyS0', {
        baudRate: 9600
      });
      port.on('open', function () {
        port.write(id + '\r\n', function (err) {
          if (err) {
            return console.log('Error on write: ', err.message);
          }
          console.log('message written');
          setTimeout(function () {
            port.close(function (err) {
              console.log('port closed', err);
            });
          }, 500);
        });
      });
      port.on('error', function (err) {
        console.log('Error: ', err.message);
      });
    }

  </script>