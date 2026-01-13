				options.upload(options, _this);

				xhr = document.createElement('div');

				// Create form element using DOM methods to prevent XSS
				var form = document.createElement('form');
				form.setAttribute('target', uid);
				form.setAttribute('action', url);
				form.setAttribute('method', 'POST');
				form.setAttribute('enctype', 'multipart/form-data');
				form.style.position = 'absolute';
				form.style.top = '-1000px';
				form.style.overflow = 'hidden';
				form.style.width = '1px';
				form.style.height = '1px';

				var iframe = document.createElement('iframe');
				iframe.setAttribute('name', uid);
				iframe.setAttribute('src', 'javascript:false;');
				form.appendChild(iframe);

				var input = document.createElement('input');
				input.setAttribute('value', uid);
				input.setAttribute('name', 'callback');
				input.setAttribute('type', 'hidden');
				form.appendChild(input);

				xhr.appendChild(form);

				_this.xhr.abort = function (){
					var transport = xhr.getElementsByName('iframe')[0];

			_css(el, opts);

			_makeFlashElement(el, api.extend({
				  id: flashId
				, src: _getUrl(api.flashImageUrl, 'r='+ api.uid())
				, wmode: 'opaque'
			;
		}

	function _makeFlashElement(container, opts){
		// Clear the container
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}

		// Create object element with proper DOM methods to prevent XSS
		var object = document.createElement('object');
		object.id = opts.id;
		object.setAttribute('classid', 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000');
		object.setAttribute('width', opts.width || '100%');
		object.setAttribute('height', opts.height || '100%');

		// Create and append param elements
		var params = {
			movie: opts.src,
			flashvars: opts.flashvars,
			swliveconnect: 'true',
			allowscriptaccess: 'always',
			allownetworking: 'all',
			menu: 'false',
			wmode: opts.wmode
		};

		for (var name in params) {
			var param = document.createElement('param');
			param.setAttribute('name', name);
			param.setAttribute('value', params[name]);
			object.appendChild(param);
		}

		// Create embed element
		var embed = document.createElement('embed');
		embed.setAttribute('name', opts.id);
		embed.setAttribute('src', opts.src);
		embed.setAttribute('flashvars', opts.flashvars);
		embed.setAttribute('swliveconnect', 'true');
		embed.setAttribute('allownetworking', 'all');
		embed.setAttribute('allowscriptaccess', 'always');
		embed.setAttribute('width', opts.width || '100%');
		embed.setAttribute('height', opts.height || '100%');
		embed.setAttribute('menu', 'false');
		embed.setAttribute('wmode', 'transparent');
		embed.setAttribute('type', 'application/x-shockwave-flash');

		object.appendChild(embed);
		container.appendChild(object);
	}



		function _css(el, css){
			if( el && el.style ){
							+ '&storeKey='+ navigator.userAgent.match(/\d/ig).join('') +'_'+ api.version
							+ (flash.isReady || (api.pingUrl ? '&ping='+api.pingUrl : ''))
							+ '&timeout='+api.flashAbortTimeout
						, width: '100%'
						, height: '100%'
					});
				},

				 * @param {String} id
				 */
				publish: function (el, id){
					_makeFlashElement(el, {
						  id: id
						, src: _getUrl(api.flashUrl, 'r=' + api.version)
//						, src: _getUrl('http://v.demidov.boom.corp.mail.ru/uploaderfileapi/FlashFileAPI.swf?1')
