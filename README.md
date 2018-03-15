jquery.formatNumber
===================

jQuery plugin for formatting numbers, good for currencies. Option to choose the cents and thousands digit. Defaults to US' 9,999.00.

Usage: `$('.number').formatNumber();`

This will make `<span class="number">2932389423.2312</span>` for e.g., be formatted into `<span class="number">2,932,389,423.23</span>`.

##Options


	//produces 2,932,389,423.23 (e.g. US standard)
	$('.number').formatNumber({
	  cents: ',',
	  decimals: 2,
	  decPoint: '.'
	});
	
	//produces 2.932.389.423,23 (e.g. Brazil standard)
	$('.number').formatNumber({
	  cents: '.',
	  decimals: 2,
	  decPoints: ','
	});
	
