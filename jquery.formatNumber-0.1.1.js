/*
 * jQuery formatNumber v0.1.1
 * https://github.com/RaphaelDDL/jquery.formatNumber
 * 
 * Copyright (c) 2012 Raphael "DDL" Oliveira
 * Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License (CC BY-NC-SA 3.0) 
 * http://creativecommons.org/licenses/by-nc-sa/3.0/
 * 
 *
 * ===============
 * Based on:
 * 'addCommas' function http://www.mredkj.com/javascript/numberFormat.html
 * Copyright (c) 2011 novusoft LLC
 *
 *
 * ===============
 * Special thanks to:
 * - Queness and it's jQuery Plugin Tutorial ( http://www.queness.com/post/112/a-really-simple-jquery-plugin-tutorial )
 * - All people who helped jQuery be what is.
 *
 * ===============
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * ===============
 */
(function($){
	/* ===============
	// $(Elem).formatNumber({opts});
	// =============== */
	$.fn.extend({
		formatNumber: function(options){
			var defaults = {
				cents: ',',
            	decPoint: '.',
				decimals: 0,
			}
			
			var o =  $.extend(defaults, options);
			
			return this.each(function() {
				/* ----Script Start---- */
                var thiz = $(this), values, x, x1, x2;
				var round = function(deci) {
					if(o.decimals > 0) {
						var value = (deci+'').substring(0, o.decimals);
						var reste = (deci+'').substring(o.decimals, o.decimals + 1);
						if(reste >= 5) {
							value++;
						}
						
						return (value+'').padEnd(o.decimals, '0');
					}
					
					return 0;
				}
				//try{
					values = $.trim(thiz.html());
					console.log(values);
					values += '';
					x = values.split(o.decPoint);
					console.log(x);
					x1 = x[0];
					console.log(x1);
					x2 = (x.length > 1 ? o.decPoint + round(x[1]) : (o.decimals > 0 ? o.decPoint + "0".repeat(o.decimals) : 0));
					console.log(x2);
					var rgx = /(\d+)(\d{3})/;
					while (rgx.test(x1)) {
						x1 = x1.replace(rgx, '$1' + o.cents + '$2');
						console.log(x1);
					}
					thiz.html(x1 + x2);
				//}catch(e){
				//	thiz.html('Value ('+values+') not formatable.');
				//}
				
				/* ----Script End---- */
			});//return each
		}//fn.extend
	});
})(jQuery);
