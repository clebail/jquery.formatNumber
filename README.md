jquery.formatNumber
===================

jQuery plugin for formatting numbers, good for currencies. Option to choose the decimal point, the thousands separator and the number of decimal points. Defaults to US' 9,999.00.

Usage: `$('.number').formatNumber();`

This will make `<span class="number">2932389423.2312</span>` for e.g., be formatted into `<span class="number">2,932,389,423.23</span>`.

##Options


	//produces 2,932,389,423.23 (e.g. US standard)
	$('.number').formatNumber({
	  thousandsSep: ',',
	  decimals: 2,
	  decPoint: '.'
	});
	
	//produces 2.932.389.423,23 (e.g. Brazil standard)
	$('.number').formatNumber({
	  thousandsSep: '.',
	  decimals: 2,
	  decPoints: ','
	});
	
