(function() {
	var init_tabarea = function(container) {
		var tab_container = $('<div class="jstab_tab_container"></div>');
		var switchToPage = function(index) {
			$('.jstab_page', container).hide();
			$('.jstab_page:eq(' + index + ')', container).show();
			$('.jstab_tab', container).removeClass('active');
			$('.jstab_tab:eq(' + index + ')', container).addClass('active');
		};
		$('.jstab_page', container).each(function(index) {
			var title = $('.jstab_title', $(this));
			var page = $(this);
			title.hide();

			// create tab for the page
			var tab = $('<a class="jstab_tab">' + title.html() + '</a>');
			tab.click(function() { switchToPage(index); });
			tab_container.append(tab);

			// hide the current tab
			$(this).hide();
		});

		// prepend the tab container to the parent container
		container.prepend(tab_container);

		// show initial tab
		switchToPage(0);
	};

	var jstab_init = function() {
		$('.jstab_container').each(function() {
			init_tabarea($(this));
		});
	}

	$(document).ready(jstab_init); // initialize jstab when document is loaded
})();
