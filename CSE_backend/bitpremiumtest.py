import time
import requests

data = {'total_max': -100.0, 'total_min': 100.0}
base_endpoint = "https://api.binance.com/"
ticker_price_url = "api/v1/ticker/24hr"
symbols = ['QTUM', 'EOS', 'SNT', 'BNT', 'BNB', 'OAX', 'DNT', 'MCO', 'ICN', 'WTC', 'LRC', 'OMG', 'ZRX', 'STRAT', 'SNGLS', 'BQX', 'KNC', 'FUN', 'SNM', 'NEO', 'IOTA', 'LINK', 'XVG', 'SALT', 'MDA', 'MTL', 'SUB', 'ETC', 'MTH', 'ENG', 'ZEC', 'AST', 'DASH', 'BTG', 'EVX', 'REQ', 'VIB', 'HSR', 'TRX', 'POWR', 'ARK', 'YOYO', 'XRP', 'MOD', 'ENJ', 'STORJ', 'VEN', 'KMD', 'RCN', 'NULS', 'RDN', 'XMR', 'DLT', 'AMB', 'BCC', 'BAT', 'BCPT', 'ARN', 'GVT', 'CDT', 'GXS', 'POE', 'QSP', 'BTS', 'XZC', 'LSK', 'TNT', 'FUEL', 'MANA', 'BCD', 'DGD', 'ADX', 'ADA', 'PPT', 'CMT', 'XLM', 'CND', 'LEND', 'WABI', 'LTC', 'TNB', 'WAVES', 'GTO', 'ICX', 'OST', 'ELF', 'AION', 'NEBL', 'BRD', 'EDO', 'WINGS', 'NAV', 'LUN', 'TRIG', 'APPC', 'VIBE', 'RLC', 'INS', 'PIVX', 'IOST', 'CHAT', 'STEEM', 'NANO', 'VIA', 'BLZ', 'AE', 'RPX', 'NCASH', 'POA', 'ZIL', 'ONT', 'STORM', 'XEM', 'WAN', 'WPR', 'QLC', 'SYS', 'GRS', 'CLOAK', 'GNT', 'LOOM', 'BCN', 'REP', 'TUSD', 'ZEN']

while True:
    for symbol in symbols:
        if symbol not in data:
            data[symbol] = {'max': (0, -100.0), 'min': (0, 100.0), 'ticker': []}

        temp = data[symbol]

        # 이더리움 -> 비트코인 환율
        request = requests.get(base_endpoint + ticker_price_url, params={"symbol": "ETHBTC"}).json()
        eth_to_btc = float(request['askPrice'])

        # 알트 -> 이더리움 가격
        request = requests.get(base_endpoint + ticker_price_url, params={"symbol": symbol + "ETH"}).json()
        eth_buy = float(request['bidPrice']) * eth_to_btc
        eth_sell = float(request['askPrice']) * eth_to_btc

        # 알트 -> 비트코인 가격
        request = requests.get(base_endpoint + ticker_price_url, params={"symbol": symbol + "BTC"}).json()
        btc_buy = float(request['bidPrice'])
        btc_sell = float(request['askPrice'])

        # 비트코인 프리미엄
        premium = round((btc_buy - eth_buy) / eth_buy * 100, 5)
        now = round(time.time(), 0)
        temp['ticker'].append((now, premium))
        temp['max'] = (now, premium) if premium > temp['max'][1] else temp['max']
        temp['min'] = (now, premium) if premium < temp['min'][1] else temp['min']

        f = open(symbol + '.txt', 'w')
        f.write(str(data[symbol]))
        f.close()
    time.sleep(10)
